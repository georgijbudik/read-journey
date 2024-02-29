import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface IAddBookModalProps {
  isValid: boolean;
  isDirty: boolean;
}

const AddBookModal = ({ isDirty, isValid }: IAddBookModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="px-5 md:px-7 py-2.5 md:py-3"
          type="submit"
          disabled={!isValid || !isDirty}
          variant="outline"
        >
          Add book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[335px] md:max-w-[342px] py-[60px] px-[46px] md:p-[50px]">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
          <div className="text-black text-5xl md:text-7xl  font-medium font-['Gilroy'] leading-10">
            👍
          </div>

          <div className="flex flex-col gap-2.5 md:gap-3.5">
            <h4 className="text-center text-primary text-lg md:text-xl font-bold leading-none md:leading-tight">
              Good job
            </h4>
            <p className="text-center text-secondary text-sm font-medium leading-none">
              Your book is now in{" "}
              <span className="text-primary">the library!</span> The joy knows
              no bounds and now you can start your training
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookModal;
