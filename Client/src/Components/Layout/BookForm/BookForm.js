import React from "react"
import Title from "../../UI/Title/Title"
import Button from "../../UI/Button/Button"
import { Input } from "../../UI/Form/Form"
import { Textarea } from "../../UI/Form/Form"
import "./BookForm.scss"
const formData=[
    {
        formType:'input',
        type:'text',
        placeholder:'Your Name'
    },
    {
        formType:'input',
        type:'email',
        placeholder:'Your Email'
    },
    {
        formType:'input',
        type:'tel',
        placeholder:'Your Phone'
    },
    {
        formType:'textarea',
        placeholder:'Your Message'
    }
]
const BookForm = () => {
    const generateForm=formData.map((item)=>{
        if (item.formType==='input'){
            return(
                <Input type={item.type} placeholder={item.placeholder} key={item.placeholder} />
            )
        }
        else{
           return(
            <Textarea placeholder={item.placeholder} key={item.placeholder} ></Textarea>
           )
        }
    })
  return (
    <section id="book-form" className="book-form">
      <div className="container">
        <div className="header">
          <Title title="Book a table" subTitle="The Good Taste of Food" />
        </div>
        <div className="form-container">
          <form action="#" method="POST">
              {generateForm}
            <Button type="submit"> Book Now</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default BookForm
