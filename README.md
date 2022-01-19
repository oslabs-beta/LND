<h1 align='center'> Memory Leak Visualizer </h1>

![LnD](https://user-images.githubusercontent.com/76221469/148320844-f1d34078-5610-45b5-ab65-77732f2f36a8.png)

## LND is a memory leak visualizer for developers.


## Disclaimer 
LND is in early stages of development and all features are currently experimental. We would appreciate hearing about any issues you encounter or feature requests. Feel free to open issues or submit pull requests.
In the project directory, you can run:

##### `npm install --save LND`

### Create a central store

Wraping RecoilRoot to provide the context to React component base architecture which atoms have values. 

![Screen Shot 2022-01-18 at 9 32 45 PM](https://user-images.githubusercontent.com/69587570/150053383-1824863f-531f-478d-9b93-51ed2c213606.png)

### Retreiving Heap Snapshots

Atoms contain the source of truth for our application state. LND takes advantage of the Atoms atomic state to capture a heap snapshot.  

![Screen Shot 2022-01-18 at 9 31 28 PM](https://user-images.githubusercontent.com/69587570/150058907-57eb9ce7-1ceb-4dfe-9ef3-98f3e18e3aed.png)
