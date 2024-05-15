import './components/scss/Base.scss';
import { SimpleCard } from './components/exports'

function App() {
    return (
        <div className="App">
            <div className="container--row container--center">
                <SimpleCard data={
                    {    
                        imageUrl: 'https://picsum.photos/300/300',
                        header: 'Lorem Ipsum',
                        bodytext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi quaerat et voluptatibus. Veritatis, voluptatum repellat odio fugiat aut odit, optio eos minus non quia ipsa eum quo. Laboriosam, obcaecati!'
                    }
                }/>
                <SimpleCard data={
                    {    
                        imageUrl: 'https://picsum.photos/300/300',
                        header: 'Lorem Ipsum',
                        bodytext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi quaerat et voluptatibus. Veritatis, voluptatum repellat odio fugiat aut odit, optio eos minus non quia ipsa eum quo. Laboriosam, obcaecati!'
                    }
                }/>
                <SimpleCard data={
                    {    
                        imageUrl: 'https://picsum.photos/300/300',
                        header: 'Lorem Ipsum',
                        bodytext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi quaerat et voluptatibus. Veritatis, voluptatum repellat odio fugiat aut odit, optio eos minus non quia ipsa eum quo. Laboriosam, obcaecati!'
                    }
                }/>
            </div>
        </div>
    );
}

export default App;
