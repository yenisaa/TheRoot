import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function EmailEntry({ id, register, error }) {
  return (
    <>
      <div className="w-full sm:w-[calc(100%-88px)] ">
        <Input
          type="email"
          id={id}
          placeholder="Input your email"
          autoComplete="true"
          className="w-full h-16  py-[22px] px-6 text-black placeholder:text-placeholder bg-white  rounded-2xl"
          {...register}
        />
        {error && (
          <p className="text-red-500 text-xs mt-1 mb-2">{error.message}</p>
        )}
      </div>

      <div className="h-16 w-full sm:w-[88px]">
        <Button type="submit" className="w-full h-full rounded-2xl">
          Submit
        </Button>
      </div>
    </>
  );
}

export default EmailEntry;
