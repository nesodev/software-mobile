import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function Ejercicio3() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async (pageNumber: number, isRefresh = false) => {
    if (loading || (!hasMore && !isRefresh)) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        params: { _page: pageNumber, _limit: 10 }
      });
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        // Filtramos duplicados para evitar el error de "duplicate key" en FlatList
        setData(prevData => {
          if (isRefresh) return response.data;
          const newData = response.data.filter(
            (newItem: any) => !prevData.some((oldItem: any) => oldItem.id === newItem.id)
          );
          return [...prevData, ...newData];
        });
        setPage(pageNumber);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setHasMore(true);
    fetchData(1, true);
  };

  const handleLoadMore = () => {
    if (hasMore) {
      fetchData(page + 1);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{ margin: 20 }} size="large" color="#007AFF" />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Ejercicio 3: API + Paginación</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
});

