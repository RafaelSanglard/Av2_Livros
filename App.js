import React, { useEffect, useState } from 'react';
import { Text, Button, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, Modal, ScrollView } from 'react-native';
import AppHeader from './components/AppHeader';
import BookDescription from './components/BookDescription';


const apiKey = 'AIzaSyAX2znfINyTtDMiri_5Ttd0NpGKRCLXrH0';
const searchTerm = 'Harry Potter';

const addBookToFirestore = async (book) => {
  try {
    await firestore().collection('selectedBooks').add(book);
    console.log('Book added to Firestore:', book);
  } catch (error) {
    console.error('Error adding book to Firestore:', error);
  }
};

//funções para adicionar ao banco

  const AddToDB = (book) => {
    addBookToFirestore(book);
    setSelectedBook(null);
  };

export function BookDetails({ book }) {
  return (
    <ScrollView>
       <Text  style={{ fontSize: 24,fontWeight: 'bold', textAlign: 'center' }}>{book.volumeInfo.title}</Text>

      {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
        <Image source={{ uri: book.volumeInfo.imageLinks.thumbnail }} style={styles.image} />
        

      )}
      <Text style={{ fontSize: 8,fontWeight: 'bold' }}>Descricao:</Text>

      <BookDescription book={book} />
    </ScrollView>
  );
}

export default function App() {
  const [bookData, setBookData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`);
        const data = await response.json();
        setBookData(data.items || []);
      } catch (error) {
        console.error('Erro ao acessar a API do Google Books:', error);
      }
    };

    fetchData();
  }, []);

  const handleBookSelection = (book) => {
    setSelectedBook(book);
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
        <AppHeader />
        <Text style = {styles.header}>Livros disponiveis</Text>
        {bookData.map((book, index) => (
          <TouchableOpacity key={index} onPress={() => handleBookSelection(book)}>
            <Text>{book.volumeInfo.title}</Text>
          </TouchableOpacity>
        ))}
      
      {/*/Selected book*/}
      <Modal visible={selectedBook !== null} animationType="slide">
        <View style={styles.modalContent}>

          {selectedBook && (
            <View>
                  <AppHeader />

              <BookDetails book={selectedBook} />
              
              {/* Renderize mais informações do livro aqui AddToDB{ title: 'Book Title', author: 'Author Name' }*/}
              <TouchableOpacity onPress={() => addBookToFirestore(selectedBook)}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>Adicionar à lista</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.buttonText}>{''}</Text>

              <TouchableOpacity onPress={() => setSelectedBook(null)}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>Fechar</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
     </ScrollView>
    </SafeAreaView>
  );
}
const app1 = initializeApp(confireb.js);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 20,
    width :'100%'
  },
    header: {
    fontSize: 24, // Adjust the size as needed
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 300,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,

  },
  buttonText: {
    fontSize: 16,
  },

  // Outros estilos aqui
});
