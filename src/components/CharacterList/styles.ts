import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '82%',
  },
  listText: {
    paddingLeft: 19,
    textAlign: 'justify',
  },
});

export default styles;
