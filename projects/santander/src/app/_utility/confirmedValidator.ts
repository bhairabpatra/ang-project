import { FormGroup } from "@angular/forms";

export function confirmedValidator(controlName:string , matchControleName:string){

  return (fromGroup : FormGroup) => {
    const control = fromGroup.controls[controlName];
    const matchingControl = fromGroup.controls[matchControleName];
    if(matchingControl.errors && !matchingControl.errors.confirmedValidator){
      return;
    }
    if(control.value !== matchingControl.value){
      matchingControl.setErrors({confirmedValidator:true});
    }
    else{
      matchingControl.setErrors(null);
    }
  }
}
