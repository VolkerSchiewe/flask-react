import React from 'react';
import {Button, Checkbox, FormControlLabel, TextField, Typography} from "@material-ui/core";
import {useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit, errors} = useForm()
    function onSubmit(data: { }){
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center h-screen bg-green-200">
                <Typography variant={"h2"} className={"pb-6"}>Login</Typography>
                <TextField type={"email"} helperText={errors["email"]?.message || " "} name={"email"} label={"Email"} variant={"outlined"} error={!!errors["email"]?.message} inputRef={register({required: "This field is required"})}/>
                <TextField type={"password"} helperText={errors["password"]?.message || " "} name="password" label={"Password"} variant={"outlined"} error={!!errors["password"]?.message} inputRef={register({required: "This filed is required"})}/>
                <FormControlLabel
                    control={<Checkbox/>}
                    name="remember_me"
                    label="Remember me"
                    inputRef={register}
                />
                <Button variant={"contained"} color={"primary"} type={"submit"}>Login</Button>
            </form>
        </div>
    );
}

export default App;
