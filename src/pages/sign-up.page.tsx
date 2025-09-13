import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpPageSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(SignUpPageSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpPageSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-center ">
    
      <div className="w-full sm:w-1/2 relative hidden sm:block">
        <img
          src="/assets/images/logincover.jpg"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-white p-4 sm:p-8">
        <div className="w-full max-w-md space-y-4 sm:space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Sign up to continue
            </h2>
          </div>

         

         

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">

            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="h-10 sm:h-12 text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john.doe@example.com"
                        className="h-10 sm:h-12 text-sm sm:text-base"
                        {...field}
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
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Password
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        className="h-10 sm:h-12 text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-10 sm:h-12 text-sm sm:text-base font-medium"
              >
                Sign up
              </Button>
            </form>
          </Form>

          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-600">
              You already have account?{" "}
              <a
                href="/"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Sign in 
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
