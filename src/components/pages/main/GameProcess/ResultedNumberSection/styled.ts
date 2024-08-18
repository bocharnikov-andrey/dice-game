import BoxCenter from "@/components/ui/BoxCenter";
import styled from "@emotion/styled";
import {COLOR_ACTION_HOVER} from "@/theme/colors";
import {BORDER_RADIUS} from "@/theme/constants";

export const StyledResultContainer = styled(BoxCenter)`
  width: 320px;
  height: 320px;
  margin-bottom: 16px;
  background-color: ${COLOR_ACTION_HOVER};
  border-radius: ${BORDER_RADIUS};
    
`;
