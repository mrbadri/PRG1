import { useContext } from "react";
import { ConfigContext } from "@/src/contexts/config";

// ==============================|| CONFIG - HOOKS  ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
