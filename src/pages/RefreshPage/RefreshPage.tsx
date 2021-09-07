import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"
import { useStyles } from './styles';

export const RefreshPage = () => {
  // TODO: Вернуть на страницу, с которой отправили
  // TODO: Обновить токен
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size='6rem'/>
    </div>
  )
}