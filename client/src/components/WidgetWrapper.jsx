import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import {styled} from "@mui/system";

const WidgetWrapper = styled(Box)(({theme}) => ({
    Padding: "1.5rem 1.5rem 0.75rem 1.5ren",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}));

export default WidgetWrapper;