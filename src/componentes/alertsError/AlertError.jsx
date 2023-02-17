import Swal from "sweetalert2";

const alertError = (txt) => {  
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: txt,
  })  
};

export default alertError;