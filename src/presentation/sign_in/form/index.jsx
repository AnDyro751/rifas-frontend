import InputComponent from '../../../components/form/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import PrimaryButtonComponent from '../../../components/buttons/primary'
import ApiSignIn from '../../../network/api/sign_in'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { router } from 'next/client'

const SignInPresentation = () => {

  const [showCode, setShowCode] = useState(false)

  const schema = yup.object()
    .shape({
      phone: yup.string()
        .max(15, 'Excede los limites')
        .required('Valor requerido')
        .nullable(),
      code: yup.string()
        .max(6, 'Excede los limites')
        .nullable()
    })
    .required()

  const { handleSubmit, setValue, watch, formState: { errors, isSubmitting, isDirty } } = useForm({
    defaultValues: {
      phone: '',
      code: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = async (values) => {
    return new Promise(async (resolve) => {
      if (values.code) {
        await signInRequest(values)
      } else {
        await requestCode(values)
      }

      resolve(true)
    })
  }

  const signInRequest = async (values) => {
    await signIn('credentials', {
      phone: `+52${values.phone}`,
      code: values.code,
      callbackUrl: '/'
    })
  }

  const requestCode = async (values) => {
    const response = await new ApiSignIn().call({
      phone: `+52${values.phone}`
    })
    if (response.success) {
      toast.success('Código de verificación enviado')
      setShowCode(true)
    }
  }

  useEffect(() => {
    if (router.query.error) {
      toast.error(router.query.error)
    }
  }, [router])

  return (
    <form
      className="flex w-full flex-wrap space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <InputComponent
          name="phone"
          type="tel"
          value={watch('phone') || router.query.phone}
          placeholder="951607232"
          onChange={(e) => {
            setValue('phone', e.target.value, {
              shouldValidate: true,
              shouldDirty: true
            })
          }}
        />
      </div>

      {
        showCode && (
          <div className="w-full">
            <InputComponent
              name="code"
              type="number"
              value={watch('code')}
              placeholder="******"
              onChange={(e) => {
                setValue('code', e.target.value, {
                  shouldValidate: true,
                  shouldDirty: true
                })
              }}
            />
          </div>
        )
      }
      <div className="w-full flex justify-end">
        <PrimaryButtonComponent
          disabled={!isDirty || isSubmitting}
          text="Iniciar sesión"
        />
      </div>
    </form>
  )
}

export default SignInPresentation
