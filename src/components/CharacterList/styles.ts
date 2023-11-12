import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#3480eb',
    borderRadius: 15,
    padding: 10,
  },
  listText: {
    textAlign: 'justify',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    aspectRatio: '8/8',
  },
});

export default styles;
