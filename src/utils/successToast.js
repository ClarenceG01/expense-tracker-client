import { toast } from "react-toastify";
export const successToast = (message, id) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    toastId: id,
    onClose: () => {
      toast.dismiss(id);
    },
  });
};
