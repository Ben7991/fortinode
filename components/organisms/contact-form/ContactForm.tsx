'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import {
  FormControl,
  FormControlError,
  FormGroup,
  FormLabel,
} from '@/components/atoms/form/Form'
import {
  PiEnvelope,
  PiNotePencil,
  PiPaperPlaneRight,
  PiUser,
} from 'react-icons/pi'
import Button from '@/components/atoms/button/Button'
import {
  ContactFormInputs,
  contactFormSchema,
} from '@/components/organisms/contact-form/ContactForm.utils'
import SectionHeading from '@/components/molecules/section-heading/SectionHeading'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactFormSchema),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data)
  }

  return (
    <article className="pb-15 md:pb-10 xl:pb-15">
      <Container>
        <SectionHeading
          text="Or submit the form below"
          className="heading-semibold"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="flex-col md:flex-row justify-between gap-4 mb-5">
            <Col colSize="col-4">
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl
                  el="input"
                  icon={<PiUser className="text-xl" />}
                  placeholder="Enter your name"
                  type="name"
                  {...register('name')}
                  hasError={Boolean(errors.name)}
                />
                {Boolean(errors.name) && (
                  <FormControlError message={errors.name?.message} />
                )}
              </FormGroup>
            </Col>
            <Col colSize="col-4">
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl
                  el="input"
                  icon={<PiEnvelope className="text-xl" />}
                  placeholder="Enter your email"
                  type="email"
                  {...register('email')}
                  hasError={Boolean(errors.email)}
                />
                {Boolean(errors.email) && (
                  <FormControlError message={errors.email?.message} />
                )}
              </FormGroup>
            </Col>
            <Col colSize="col-4">
              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormControl
                  el="input"
                  icon={<PiNotePencil className="text-xl" />}
                  placeholder="Enter your subject"
                  type="text"
                  {...register('subject')}
                  hasError={Boolean(errors.subject)}
                />
                {Boolean(errors.subject) && (
                  <FormControlError message={errors.subject?.message} />
                )}
              </FormGroup>
            </Col>
          </Row>
          <Col colSize="col-12" className="mb-6">
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormControl
                el="textarea"
                placeholder="Enter your message"
                rows={6}
                {...register('description')}
                hasError={Boolean(errors.description)}
              />
              {Boolean(errors.description) && (
                <FormControlError message={errors.description?.message} />
              )}
            </FormGroup>
          </Col>
          <Button
            el="button"
            variant="primary"
            className="px-5 flex items-center justify-center gap-2 cursor-pointer"
          >
            Submit <PiPaperPlaneRight className="text-xl" />
          </Button>
        </form>
      </Container>
    </article>
  )
}
