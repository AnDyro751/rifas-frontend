import CheckSerializer from '../../serializers/check'
import paymentMethods from '../../utils/paymentMethods'
import AlertComponent from '../alert'
import Link from 'next/link'
import classNames from 'classnames'
import { useState } from 'react'

const ButtonInstructions = ({ check, children, id = 'instructions' }) => {
  const checkSerialized = new CheckSerializer(check)
  const [open, setOpen] = useState(false)

  const modalClass = classNames({
    'modal cursor-pointer m-0': true,
    'modal-open': open,
    'modal-close': !open
  })

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <div className="relative">
      <div onClick={handleClick}>
        {
          children
        }
      </div>
      <div htmlFor={id}
           className={modalClass}
      >

        <label
          className="modal-box relative" htmlFor={id}>
          <div
            draggable={false}
            onClick={() => {setOpen(false)}}
            className="absolute cursor-pointer top-4 right-2 h-12 w-12 hover:bg-gray-200 rounded-full flex items-center justify-center"
          >
            <img
              className="h-8 w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAABmJLR0QA/wD/AP+gvaeTAAAEQklEQVR4nO3cO3IbRxSG0SunhhcpbsKhFWpXDmityw7g0QMPYoDpx+3uc6qQsnow/wdSImsiAAAAAAAAAAAAAAAAAAAAAAAAAOCWzxFx6n0IijnF+Z6yw5eI+DcivkXEH53PwnG/R8Tfcb6nXzufJb1t/NtLBGP7efzbSwR3XI5fBGO7NX4R3HFv/CIY00fjF8GFR+MXwVj2jF8E/9s7fhGM4ZnxLx/Bs+MXQW6vjH/ZCF4dvwhyOjL+5SI4On4R5FJi/MtEUGr8Isih5Pinj+Atyr5R2+s9/NlED6c4v/c17ulbw+topsanhe8EfdS8l//ExPdSBOMz/oNEMC7jL0QE4zH+wkQwDuOvRAT5GX9lIsjL+BsRQT7G35gI8jD+TkTQn/F3JoJ+jD8JEbRn/MmIoB3jT0oE9Rl/ciKox/gHIYLyjH8wIijH+AclguOMf3AieJ3xT0IEzzP+yYhgP+OflAgeM/7JieA+41+ECK4Z/2JE8IPxL0oExr+8lSMwfiJizQiMn1+sFIHxc9MKERg/H5o5AuNnlxkjMH6eMlMExs9LZojA+Dlk5AiMnyJGjMD4KWqkCIyfKkaIwPipKnMExk8TGSMwfprKFIHx00WGCIyfrnpGYPyk0CMC4yeVlhEYPym1iMD4Se0UEe9RZ6Dvlb/2qcL7wYJqfkr75GcIo0Rg/FSTPQLjp7qsERg/zWSLwPhpLksExk83vSMwfrrrFYHxk0brCIyfdFpFYPykVTsC4y/st94H4Cmfeh8A7mn1I1DvB/LCldb/CBYBafT6b1AR0F3vX4SJgG56j18EdJNl/CKguWzjFwHNZB2/CKgu+/hFQDWjjF8EFOexKCyrxUOrMjyQF660fGKbCEilx+MKRUAKPZ/VKQK6yvCgWhHQRYbxtziLCLiSafwtziQCvss4/hZnEwGpx9/ijCJY2Ajjb3FWESxopPG3OLMIFjLi+FucXQQLGHn8La5BBBObYfwbEfCUmca/EQG7zDj+jQj40Mzj34iAm1YY/0YE/GKl8W9EQESsOf6NCBa38vg3IliU8f8ggsUY/zURLML47xPB5Iz/MRFMyvj3E8FkjP95IpiE8b9OBIMz/uNEMCjjL0cEgzH+8kQwCOOvRwTJGX99IkjK+NsRQTLG354IkjD+fkTQmfH3J4JOjD8PETRm/PmIoBHjz0sElRl/fiKoxPjHIYLCjH88IijE+MclgoOMf3wieJHxz0MEL3iLOm/Ye0ScGl4HZ6c4v/c17ulbw+to6s/wyT+TGt8J/mp6BR2UisD4cygZwfTj3xyNwPhzKRHBMuPfvBqB8ed0JILlxr95NgLjz+2VCJYd/2ZvBMY/hmciWH78m0cRGP9Y9kRg/BfuRWD8Y/ooAuO/4zIC4x/brQiM/4EtAuOfw88RGP9On8OfN8zkFOd7CgAAAAAAAAAAAAAAAAAAAAAAAAAX/gOmn3GcRkK/sAAAAABJRU5ErkJggg=="/>
          </div>
          <h3 className="text-lg font-bold mb-12">
            Métodos de pago aceptados
          </h3>

          <AlertComponent
            type="danger"
            message={<p>
              Recuerda poner en el motivo de pago el número de tu ticket{checkSerialized.id && (
              <strong>: {checkSerialized.id}</strong>)}
            </p>}
          />

          {
            checkSerialized.id && (
              <h4 className="mt-4">
                En este caso es:
                <span className="font-bold">{' '}{checkSerialized.id}</span>
              </h4>
            )
          }

          <div class="divider"/>
          {
            paymentMethods.map((payment, i) => (
              <div key={i}>
                <p className="font-bold pb-1">
                  {payment['name']}
                </p>
                <p>
                  {payment['value']}
                </p>
                <div class="divider"/>
              </div>
            ))
          }

          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_CONTACT}?text=Hola. Aquí está mi comprobante de pago con número de ticket: ${checkSerialized.id}`}
            className="btn bg-whats w-full"
          >
            Enviar comprobante vía WhatsApp
            {'  '}
            <img
              className="ml-2 h-6 w-6"
              src="data:image/png;base64,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"/>
          </a>

          <div class="divider">O</div>
          <Link href={`/comprobante?check_id=${checkSerialized.id}`}>
            <a className="btn btn-ghost w-full">
              Subir comprobante desde mi dispositivo
              {' '}
              <img
                className="ml-2 h-6 w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACsElEQVR4nO3dzU7bQBiF4bdVk12rbgmw5F5KrwQEF9Yu2JWqN9CCWuglgES7q7pIwr5d2Eg4yo8Nn2fOOOeRZoFiMp/nMLGSmWAwMzMzs7KNgVPgErgH/om3e+ACOKlrH5QJ8JP8g/zUdg3shI9KJmPKDuOhXQGj4LHJ4pT8gxnVjoPHJotLmif1CdjNWlE7e8A5zdq/Za0oyJzmSe3lLaeTfZq1z/ru8EXfHVCdSOo+IyWt/2WfT27dORAxDkTMqwx9Lr4m2yOeIWIciBgHIibHNaT09yG98gwR40DEOBAxDkSMAxHjQMQ4EDEORIwDEeNAxDgQMQ5EjAMRoxbIAXBGtd2m701vM+AjZewRC7U4EKscAH+XHN93+8P6UNrWX4y2J3S25NhU7UNA/SGUNsrNgNc917LKFHi74rGkG+WUAok6LnV/odQu6lvPgYhxIGIciBgHIibHvqxog3iz9sAzREyJgfzucOyv3qooWNuPHtoed0g10Js+DrkD3iWsK0SJ79SjSNZV4kvWoDkQMQ5EjAMR40DEOBAxDkSMAxHjQMQ4EDEORIwDEeNAxCitGM6AN49+TrkSOE3Y11pKM+TLlvadXNsFnl2qjc85NltPAuovRpcTmlBtfJ4u+b3oNq37WhdG1/qfTWnFUJVXDLeZAxHjQMQ4EDEORIwDEeNAxDgQMQ5EjAMR40DE+O4IYjxDxDgQMQ5EjO+OsFnSa55niJiSAnkP3NJ9qfaW6ouiVotak75b8lxtW5evUi9KuqZe0gyxIFF/YYfAzZLn29RuWP999U0Gtw1o8T+M+ubEmS3evvucMkLZBz7TrH0Qt+8+of9Nb6naUfDYZDEGrsk/mM9t34FR8NhkswNckX9Qn9p+1OcwKCPgGPgKzMk/yJvavK71iAHNDDMzM7Pt9B+pf8gwwaIZ/wAAAABJRU5ErkJggg=="/>
            </a>
          </Link>
        </label>
      </div>
    </div>

  )
}

export default ButtonInstructions
