import { useLocation, useNavigate } from "react-router-dom";
import "../css/admin.css";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import logo from "../assets/images/logo-long-black.svg";

import Dashboard from "../components/dashboard";
import "../css/login.css";
import AdminSide from "@/components/adminSide";
import axios from "axios";
import { baseURL } from "@/api/api";

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [section, setSection] = useState<any>("Dashboard");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //@ts-ignore
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
        axios.get(`${baseURL}/api/users`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')||"{}")?.token}`
            }
        })
        .then(() => {
            
        })
        .catch(err => {
            if (`${err.response?.data?.message}`.includes('Unauthenticated')) {
                navigate('/login')
                localStorage.removeItem('user')
                localStorage.removeItem('token')
            }
        })
    }, [])
  return (
    <div>
      <section className="adminHeader1">
        <div className="adminHeader">
          <div className="logoContainer">
            <img
              onClick={() => location.pathname != "/" && navigate("/")}
              alt="logo"
              className="logo"
              src={logo}
            />
            <div
              onClick={() => location.pathname != "/" && navigate("/")}
              className="logoTextCont"
            >
              <div className="logoText">CMBD</div>
            </div>
          </div>
          {/*  */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Popover>
              <PopoverTrigger>
                <div className="profilepic">RC</div>
              </PopoverTrigger>
              <PopoverContent className="profilePop">
                <div className="username">ricardocmbd</div>
                <div className="email">ricardocmbd@gmail.com</div>

                <AlertDialog>
                  <AlertDialogTrigger style={{ width: "100%" }}>
                    <div className="option">
                      <span className="optionText">Logout</span>
                      <svg
                        color="red"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                        />
                      </svg>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <span>
                      <AlertDialogTitle>Sair de conta</AlertDialogTitle>
                      <AlertDialogDescription>
                        Deseja mesmo sair de conta? Terá de fazer login de novo
                        para acessar o painel administrativo.
                      </AlertDialogDescription>
                    </span>
                    <span
                      style={{
                        alignSelf: "center",
                        marginTop: 15,
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <AlertDialogCancel style={{ margin: 0 }}>
                        Cancelar
                      </AlertDialogCancel>
                      <AlertDialogAction
                        style={{ margin: 0 }}
                        onClick={() => {
                          navigate("/login");
                          localStorage.removeItem("user");
                          localStorage.removeItem("token");
                        }}
                      >
                        Confirmar
                      </AlertDialogAction>
                    </span>
                  </AlertDialogContent>
                </AlertDialog>
              </PopoverContent>
            </Popover>
            
          </div>
        </div>
      </section>
      <div className="adminBody">
        <AdminSide section={section} setSection={setSection} />
        <div className="body">
          <Dashboard />

          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
