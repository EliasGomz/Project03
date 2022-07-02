import React from 'react';
import { useState } from 'react';
import {
   ScrollView,
   Text,
   View,
   TouchableOpacity, 
} from 'react-native';
import styles from './styles';

const HomePage = () => {
    const [list1, setList] = useState([]);
    const [list2, setList2] = useState([]);

    const list = [{ "firstName": "Kiran", "lastName" : "Kumar", "salary" : 25000 },
                  { "firstName": "Mohan", "lastName" : "Srivastav", "salary" : 20000 },
                  { "firstName": "Mary", "lastName" : "Kom", "salary" : 23000 }];


    const SalMax = () =>{
        const sal = list.reduce((Prev, curr) => {
            if(curr.salary > Prev.salary) return curr
            return Prev
        },{firstName:" ", salary : 0})
        console.log(sal)
    };

    const FindSal = () =>{
        const salX = list.find(item => {
            return item.salary < 19000;
        })
        console.log(salX)
        //operadores logicos
        //buscar que valores son true y false
         if(!salX){
            alert('No hay empleados con salario menor a 19000')
         }else{
            alert('Hay empleados con salario meyor a 19000')
         }
    };

    const FindIdx = () =>{
        const idx = list.findIndex(({salary}) => salary === 20000)
        alert(`El indice del empleado es ${idx}`) 
    };

    const FindSalAll = () =>{
        const sal = list.filter((item) => item.salary >= 20000 && item.salary <= 24000)
        setList(sal); 
    };

    const FindSalA = () => {
        return(
            <View style={styles.view}>
                {
                    list1.map(({firstName, salary}, index) => {
                        return <Text style={styles.text1} key={`${index}-${firstName}`}>{`${firstName}  $${salary}`}</Text>
                    })
                }
            </View>
        );
    }

    // const ReduceSal = () => {
    //     return(
    //         <View style={styles.view1}>
    //             {
    //                 list2.map(({firstName, salary}, index) => {
    //                     if(salary === 25000)
    //                     return <Text style={styles.text1} key={`${index}-${firstName}`}>{`${firstName}  $${salary}`}</Text>
                        
    //                 })
    //             }
    //         </View>
    //     );
    // }

    
    return (
        <View>
            <ScrollView style={styles.container1}>
                
                <TouchableOpacity style={styles.btn} onPress={() => SalMax()}>
                    <Text style={styles.text}> reduce()</Text>
                </TouchableOpacity>
            </ScrollView> 
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={() => FindSal()}>
                    <Text style={styles.text}> find()</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => FindIdx()}>
                    <Text style={styles.text}> findIndex()</Text>
                </TouchableOpacity>
            </ScrollView>
            <ScrollView style={styles.container1}>
                <View>{FindSalA()}</View>
                <TouchableOpacity style={styles.btn2} onPress={() => FindSalAll()}>
                    <Text style={styles.text}> findAll()-filter()</Text>
                </TouchableOpacity>
            </ScrollView>    
        </View>
    );
};

export default HomePage;
