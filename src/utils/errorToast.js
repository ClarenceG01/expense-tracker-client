import { toast } from "react-toastify";
export const errorToast = (message, id) => {
  toast.error(message, {
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
