import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen 
            name="index" 
            options={{ headerShown: false, title: "HomeScreen" }}
             />
             <Stack.Screen 
            name="(tabs)" 
            options={{ headerShown: false, title: "Home" }}
            />
        </Stack>
        
        
        )
    
}