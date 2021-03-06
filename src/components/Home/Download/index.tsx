import React from "react";
import { Card, StrictCardProps } from "semantic-ui-react";
import AngularLogo from "../../../assets/angular.svg";
import ReactLogo from "../../../assets/react.svg";
import VueLogo from "../../../assets/vue.svg";
import DownloadCard from "./DownloadCard";

interface DownloadProps {
  downloadHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  advancedHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface FrameworkType {
  logo: string;
  name: string;
  color: StrictCardProps["color"];
}
const style = {
  container: {
    paddingLeft: "2em",
    paddingRight: "2em",
  },
};
const Download = (props: DownloadProps) => {
  const { downloadHandler, advancedHandler } = props;
  const frameworks: Array<FrameworkType> = [
    { logo: ReactLogo, name: "react", color: "blue" },
    { logo: AngularLogo, name: "angular", color: "red" },
    { logo: VueLogo, name: "vue", color: "green" },
  ];
  return (
    <Card.Group style={style.container} itemsPerRow={3} stackable>
      {frameworks.map(({ name, color, logo }) => (
        <DownloadCard
          key={name}
          logo={logo}
          name={name}
          color={color}
          downloadHandler={downloadHandler}
          advancedHandler={advancedHandler}
        />
      ))}
    </Card.Group>
  );
};
export default Download;
