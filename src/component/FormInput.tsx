import React from "react"


export interface FormInputInterface{
    name: string
    placeholder: string
    type: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value?: string
}

export function FormInput({name, placeholder, type, onChange, value}: FormInputInterface) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-xs font-semibold text-white md:text-base font-medium">{name}</label>
            <input placeholder={placeholder} type={type} className="bg-[#222222] py-3 px-2 rounded-lg text-white focus:border-none outline-none md:py-4 px-3" onChange={onChange} value={value}/>
        </div>
    )
}

export function FormPara({name, placeholder, onChange, value}: FormInputInterface) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-xs font-semibold text-white md:text-base font-medium">{name}</label>
            <textarea
                id="description"
                name="description"
                placeholder={placeholder}
                rows={5}  
                cols={50} 
                onChange={onChange}
                value={value}
                className="text-white rounded-lg px-2 py-3 bg-[#222222] focus:border-none outline-none md:py-4 px-3"
            ></textarea>
        </div>
    )
}