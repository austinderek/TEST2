package main

import "fmt"

func main() {
	// golint will report an error because of the uppercase 'W' in 'World'
	fmt.Println("Hello, World!")
}