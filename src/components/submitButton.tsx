"use client"
import { ImSpinner9 } from 'react-icons/im'
import { Button, ButtonProps } from '@/components/ui/button'


type Props = ButtonProps & {
  text: string,
  pending?: boolean,
}

export default function SubmitButton({ text, pending, ...props }: Props) {


  return (
    <Button
      disabled={pending}
      {...props}
    >
      {pending ? <ImSpinner9 className="ease-in-out animate-spin" size={25} /> : text}
    </Button>
  )
}
