import { Alert } from 'react-native';

export function askLogoutConfirmation(onConfirm: () => void) {
  Alert.alert(
    'Sair da conta',
    'Você tem certeza de que deseja sair de sua conta?',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: onConfirm },
    ],
    { cancelable: true },
  );
}