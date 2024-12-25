import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    backgroundColor: '#fff', // Nền trắng
  },
  myList: {
    width: '100%', // Để FlatList chiếm toàn bộ chiều rộng
  },
  image: {
    width: '100%', // Tràn đều hai bên màn hình
    height: 400 , // Chiều cao cố định
    resizeMode: 'cover', // Đảm bảo ảnh không bị méo
  },
});
