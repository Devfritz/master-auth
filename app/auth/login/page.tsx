"use client";
import { loginAction } from "@/app/action";
import CardWrapper from "@/components/auth/CardWrapper";
import MessageError from "@/components/auth/MessageError";
import MessageSuccess from "@/components/auth/MessageSuccess";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schema/schema-login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function LoginPage() {
    const [errorMessage, setErrorMessage] = useState<string | undefined>("");
    const [successMessage, setSuccessMessage] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setErrorMessage("")
        setSuccessMessage("")
        loginAction(values).then(data => {
            setErrorMessage(data.error);
            setSuccessMessage(data.success);
        })
    }
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="fritzgerlinsenat@gmail.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="***"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="w-full mt-6" size="lg">
                        Login
                    </Button>

                    <MessageError message={errorMessage} />
                    <MessageSuccess message={successMessage} />
                </form>
            </Form>
        </CardWrapper>
    );
}
