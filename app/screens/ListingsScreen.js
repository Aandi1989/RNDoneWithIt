import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from "../api/listing";



function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings();
    },[]);

    const loadListings = async () => {
    //    const response = await listingsApi.getListings();
    // setListings(response.data);
       
    const response = await fetch('http://192.168.100.22:9000/api/listings');
    const res = await response.json();
    console.log(res)
    }
    
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    imageUrl={item.images[0].url}
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
                />
            }    
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen;