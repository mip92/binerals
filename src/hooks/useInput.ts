import {useState} from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState<string>(initialValue)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const Change = (e: string) => {
        setValue(e)
    }

    return {value, onChange, Change}
}