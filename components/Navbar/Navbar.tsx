import clsx from "clsx";
import React from "react";
import { useClient } from "../../providers/ClientProvider";
import { motion } from "framer-motion";
import CosmwanderLogo from "../Icons/ComswanderLogo";
import { SearchInput } from "../Input";

const CLASSES = {
  osmosis: {
    textFill: "fill-chain-osmosis-600",
    iconFill: "fill-chain-osmosis-600",
    from: "from-chain-osmosis-600/50",
  },
  juno: {
    textFill: "fill-chain-juno-400",
    iconFill: "fill-chain-juno-600",
    from: "from-chain-juno-600/50",
  },
  stargaze: {
    textFill: "fill-chain-stargaze-400",
    iconFill: "fill-chain-stargaze-400",
    from: "from-chain-stargaze-400/50",
  },
};

const Navbar: React.FC = () => {
  const { chain } = useClient();

  return (
    <motion.nav className="min-h-[4.5rem] p-4 relative flex items-center justify-between">
      <motion.div
        key={chain}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            opacity: {
              ease: "easeInOut",
              duration: 0.5,
            },
          },
        }}
        className={clsx(
          "absolute bg-gradient-radial via-transparent to-transparent top-[-50%] w-full h-[100%] blur-2xl",
          CLASSES[chain].from
        )}
      ></motion.div>
      <motion.div className="max-w-[1425px] w-full mx-[auto] my-0 flex items-center justify-between py-4">
        <motion.div
          key={chain}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              opacity: {
                ease: "easeInOut",
                duration: 0.5,
              },
            },
          }}
        >
          <CosmwanderLogo
            iconFill={CLASSES[chain].iconFill}
            textFill={CLASSES[chain].textFill}
          />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
