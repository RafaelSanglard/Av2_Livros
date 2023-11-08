import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const BookDescription = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  const description = book.volumeInfo.description;

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Text>
        {expanded ? description : `${description.substring(0, 100)}...`}
      </Text>
      {!expanded && (
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={{ color: 'blue' }}>Saiba mais</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BookDescription;
