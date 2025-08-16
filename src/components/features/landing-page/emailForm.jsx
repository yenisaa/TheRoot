import { useEmailForm } from "@/hooks/useEmailForm";
import EmailEntry from "@/components/ui/emailEntry";

function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useEmailForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto w-full flex flex-col sm:flex-row gap-3"
    >
      <EmailEntry
        id="cta-email"
        register={register("email")}
        error={errors.email}
      />
    </form>
  );
}

export default EmailForm;
