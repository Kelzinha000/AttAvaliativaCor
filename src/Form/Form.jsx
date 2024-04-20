import Input from "../Input/Input"
import Button from "../Button/Button"
import "./Form.css"
import MessageTerm from "../MessageTerm/MessageTerm"
import MessageFree from "../MessageFree/MessageFree"


const Form = () =>{
    return(
        <div>
         <MessageFree />
        <form>
            <Input type="text" placeholder="First Name"/>
            <Input type="text" placeholder="Last Name"/>
            <Input type="email" placeholder="Email Address"/>
            <Input type="password" placeholder="Password"/>
             <Button 
             buttonName="CLAIM YOUR FREE TRIAL"/>
             <MessageTerm link="#" />
        </form>
        </div>
    )
}

export default Form;