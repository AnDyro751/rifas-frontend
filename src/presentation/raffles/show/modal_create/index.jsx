import { useEffect, useState } from 'react'
import classNames from 'classnames'
import calculatePrice from '../selected_items/calculatePrice'
import CreateCheckService from '../../services/create_check_service'
import { useRouter } from 'next/router'
import RaffleSerializer from '../../../../serializers/raffle'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputComponent from '../../../../components/form/input'
import { toast } from 'react-hot-toast'

const RaffleModalCreate = ({ selectedTickets = [], raffle }) => {
  const raffleSerialized = new RaffleSerializer(raffle)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const createTicketsParams = () => {
    return selectedTickets.map((el) => el.attributes?.uuid)
  }

  const modalClass = classNames({
    'modal': true, 'modal-open': open
  })

  const schema = yup.object()
    .shape({
      user_phone: yup.string()
        .max(15, 'Excede los limites')
        .min(10, 'Ingresa tu teléfono completo')
        .required('Valor requerido')
        .nullable(), user_name: yup.string()
        .max(120, 'Excede los limites')
        .min(3, 'Ingresa tu nombre completo')
        .nullable()
    })
    .required()

  const { handleSubmit, clearErrors, setValue, reset, watch, formState: { errors, isSubmitting, isDirty } } = useForm({
    defaultValues: {
      user_phone: '', user_name: ''
    }, resolver: yupResolver(schema)
  })

  const onSubmit = async (values) => {
    return new Promise(async (resolve) => {
      const createCheckService = await new CreateCheckService().call({
        tickets: createTicketsParams(),
        raffle_id: router.query.slug,
        user_phone: values.user_phone,
        user_name: values.user_name
      })
      resolve(true)
      if (createCheckService.success) {
        toast.success('🤑 ¡Boletos apartados!')
        const bank_uuid = createCheckService.data?.attributes?.bank_uuid
        if (bank_uuid) {
          await router.push(`/b/${bank_uuid}`)
          return
        }
      }
      createCheckService.errors.map((error) => {
        toast.error(error)
      })
    })
  }

  useEffect(() => {
    if (!open) {
      reset({ user_phone: '', user_name: '' })
      return
    }
    clearErrors()
  }, [open])

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={modalClass}>
        <div className="modal-box">
          <h3 className="font-bold text-2xl">¡Aparta tus boletos!</h3>
          <section

            className="flex mt-4 w-full flex-wrap space-y-4">
            <div className="w-full">
              <InputComponent
                value={watch('user_name')}
                placeholder={'Juan Perez'}
                error={errors.user_name?.message}
                label="Nombre completo"
                name="name"
                onChange={(e) => {
                  setValue('user_name', e.target.value, {
                    shouldValidate: true, shouldDirty: true
                  })
                }}
              />
            </div>
            <div className="w-full">
              <InputComponent
                value={watch('user_phone')}
                placeholder={'9516056323'}
                error={errors.user_phone?.message}
                label="Número de teléfono"
                name="phone"
                onChange={(e) => {
                  setValue('user_phone', e.target.value, {
                    shouldValidate: true, shouldDirty: true
                  })
                }}
              />
            </div>
          </section>
          <div className="modal-action">
            <button
              onClick={() => {setOpen(false)}}
              className="btn btn-link text-red-400">
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !isDirty}
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
            >
              Apartar {selectedTickets.length} {selectedTickets.length === 1 ? 'boleto' : 'boletos'}
            </button>
          </div>
        </div>
      </form>
      <div className="w-2/12 flex flex-wrap justify-end">
        <div className="w-full">
          <button
            onClick={() => {
              setOpen(true)
            }}
            className="btn btn-primary w-full"
          >
            Apartar {selectedTickets.length} {selectedTickets.length === 1 ? 'boleto' : 'boletos'}
          </button>
        </div>
        <div className="w-full mt-2 text-center">
          <p className="font-bold">${calculatePrice(selectedTickets, raffleSerialized)} MXN</p>
        </div>
      </div>
    </>
  )

}
export default RaffleModalCreate
