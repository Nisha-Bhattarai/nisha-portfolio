import React from "react";
import { styled } from "@mui/material/styles";
// import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: "10%",
    width: "100%",
  },
});

const SkillsComponent = ({ skillTitle, toolTip }) => {
  return (
    <CustomTooltip title={toolTip} arrow placement="top">
      <button className="--btn --btn-secondary --mb --mt">{skillTitle}</button>
    </CustomTooltip>
  );
};

export default SkillsComponent;
