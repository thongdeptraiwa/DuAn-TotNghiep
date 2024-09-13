import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { CustomTextInputSearch } from '../custom/textinputs/CustomTextInput';
import SearchItem from '../custom/items/SearchItem';
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
    setSearchQuery(query); // Cập nhật giá trị searchQuery.
    if (query === '') {
      setFilteredProducts([]); 
    } else {
      // Lọc danh sách Product để tìm các sản phẩm có tên chứa chuỗi tìm kiếm (không phân biệt chữ hoa chữ thường).
      const filtered = data.filter((a) =>
        a.displayName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered); // Cập nhật danh sách filteredProducts.
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
