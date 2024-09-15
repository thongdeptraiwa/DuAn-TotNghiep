import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { CustomTextInputSearch } from '../custom/CustomTextInput';
import SearchItem from '../custom/SearchItem';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../rtk/API';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]); // Tạo state cho danh sách sản phẩm sau khi lọc.

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const result = await dispatch(getAllUsers());
      if (result.payload && result.payload.users) {
        setData(result.payload.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredProducts([]);
    } else {

      const filtered = data.filter((a) =>
        a.displayName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomTextInputSearch
        placeholder="Tìm kiếm"
        value={searchQuery}
        onChangeText={handleSearch} // Update query state on text input
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <SearchItem user={item} />}
      />
    </View>
  );
};

export default Search;
