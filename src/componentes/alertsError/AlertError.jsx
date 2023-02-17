import Swal from "sweetalert2";

const AlertError1 = ({ txt="Es obligatorio el campo Nombre" }) => {
  return(
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${txt}`,
  })
  )
};

export default AlertError1;
