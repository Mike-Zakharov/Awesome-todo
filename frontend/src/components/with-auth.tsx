import axios from "axios";
import { useEffect, useState, type ComponentType, type JSX } from "react";
import { useNavigate } from "react-router";
import type { TUser } from "../config/types";
import { BASE_PATH } from "../config/constans";
import { useAuthStore } from "../store/user-store";

type TAuthResponse = {
  user: TUser;
};

export function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>
) {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const setUser = useAuthStore((s) => s.setUser);
    const user = useAuthStore((s) => s.user);
    const navigate = useNavigate();
    const [isLoading] = useState(false);
    const [, setIsFetched] = useState(false);
    const [isErorr, setIsError] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await axios.get<TAuthResponse>(
            `${BASE_PATH}/auth/me`,
            {
              withCredentials: true,
            }
          );
          if (response.data && response.data.user) {
            setUser(response.data.user);
          } else {
            setIsError(true);
            navigate("/login");
          }
        } catch {
          setIsError(true);
        }
        setIsFetched(true);
      };

      if (!user) {
        checkAuth();
      }
    }, [navigate, user, setUser, isErorr]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isErorr) {
      navigate("/login");
    }

    if (user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return ComponentWithAuth;
}
