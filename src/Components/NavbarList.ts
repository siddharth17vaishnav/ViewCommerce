import Person2Icon from "@mui/icons-material/Person2";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Item {
  icon: React.ComponentType;
  text: string;
}

const Li: string[] = [
  "Home",
  "Electronics",
  "Fashion",
  "Appliances",
  "Top offers",
];

const x: string[] = ["Customer Service", "Gift boxes", "Today’s deals", "Help"];

const y: Item[] = [
  {
    icon: Person2Icon,
    text: "profile",
  },
  {
    icon: MessageIcon,
    text: "Message",
  },
  {
    icon: FavoriteIcon,
    text: "Orders",
  },
  {
    icon: ShoppingCartIcon,
    text: "My cart",
  },
];

export default { Li, x, y };
