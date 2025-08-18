import React from 'react'
import { TitleText } from '../../common'
import FormLayout from '../../partial/FormLayout'
import CreateForm from './CreateForm'

const CreateResume = () => {
  return (
    <div className='rsume-page'>
      <div className="top">
        <TitleText title="ساخت رزومه جدید" fontSize={20} color="#1F2937" className='mt-10 mr-6'/>
      </div>
      <div className="bottom w-full max-lg:flex max-lg:justify-center max-lg:mt-6">
        <FormLayout width={80} margin={[40, 30, 0, 0]}>
          <TitleText title="اطلاعات رزومه" fontSize={15} color="#1F2937" className=''/>
          <CreateForm />
        </FormLayout>
      </div>
    </div>
  )
}

export default CreateResume
