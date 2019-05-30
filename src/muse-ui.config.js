import 'muse-ui/lib/styles/base.less'
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  BottomNav,
  Drawer,
  Divider,
  Grid,
  Icon,
  List,
  LoadMore,
  Menu,
  Paper,
  SubHeader,
  Tabs,
  TextField
} from 'muse-ui'

const components = [
  AppBar,
  Avatar,
  Badge,
  Button,
  BottomNav,
  Icon,
  List,
  LoadMore,
  Menu,
  Drawer,
  Divider,
  Grid,
  Paper,
  Tabs,
  TextField,
  SubHeader
]

export default {
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
