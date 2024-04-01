import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {
  const list = [];
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    list.push(
    <li key={t.id}>
      <a href={"/read/"+t.id} onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode(t.id);
        // props.onChangeMode(e.target.id);// tag에 id 속성을 추가해야 함
      }}>{t.title}</a>
    </li>
    );
  }

  return (
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
  )
}
function Article(props) {
  return (
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={e=>{
        debugger;
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder='title' /></p>
        <p><textarea name="body" placeholder='body' ></textarea></p>
        <p><input type="submit" value="create" /> </p>
      </form>
    </article>
  )
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={e=>{
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type="text" name="title" placeholder='title' value={title} 
          onChange={e=>{
          setTitle(e.target.value);
        }}/></p>
        <p><textarea name="body" placeholder='body' value={body} 
          onChange={e=>{
          setBody(e.target.value);
        }}></textarea></p>
        <p><input type="submit" value="update" /> </p>
      </form>
    </article>
  )
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body: 'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'javascript', body: 'javascript is ...'},
  ]);

  let content = null;
  let contextControl = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  }
  if (mode === 'READ') {
    let topic = {};
    for (let i=0; i<topics.length; i++) {
      if (topics[i].id === id) {
        // console.log(topics[i].id, id)
        topic = topics[i];
      }
    }

    content = <Article title={topic.title} body={topic.body}></Article>;
    contextControl = <li><a href={"/update/"+id} onClick={e=>{
      e.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>;
  }
  if (mode === 'CREATE') {
    content = <Create onCreate={(title, body)=>{
      const newTopic = {id: nextId, title: title, body: body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>;
  }
  if (mode === 'UPDATE') {
    let topic = {};
    for (let i=0; i<topics.length; i++) {
      if (topics[i].id === id) {
        // console.log(topics[i].id, id)
        topic = topics[i];
      }
    }

    content = <Update title={topic.title} body={topic.body} 
      onUpdate={(title, body)=>{
        const newTopics = [...topics]
        const upTopic = {id: id, title: title, body: body}
        for (let i=0; i<newTopics.length; i++) {
          if (newTopics[i].id === id) {
            newTopics[i] = upTopic;
            break;
          }
        }
        setTopics(newTopics);
        setMode('READ');
    }}></Update>;
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('READ');
        setId(id);
      }}></Nav>
      {content}
      <ul>
        <li>
          <a href="/create" onClick={e=>{
            e.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
