import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
 
export function SigIn() {

    const { colors } = useTheme();

    return (

        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
<Logo /> 
            
         {/*    <svg>
                <image src='../assets/logo_primary.svg'></image>
            </svg> */}

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse a conta 
            </Heading>

             <Input placeholder='EMAIL' mb={4} 
                   InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}/>
   
            <Input placeholder='Senha'
                   secureTextEntry
                   InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}/>

            <Button title="Entrar" w="full"/>            
            
        </VStack>
      
    )
}