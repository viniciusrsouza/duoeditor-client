import { useTranslation } from "next-i18next";
import { Button, ThemeSwitch } from ".";
import { FC } from "react";

interface Props {}

const Navbar: FC<Props> = () => {
  const { t } = useTranslation("home");

  return (
    <nav className="duo-container duo-navbar">
      <div className="duo-navbar-title">DuoEditor</div>
      <div>
        <div className="duo-navbar-user">
          <Button label={t("sign_in")} variant="primary" />
          <Button label={t("sign_up")} style="text" />
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
