import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {latestIndiaNews, latestUSNews} from '../actions'

class Home extends Component{
    render(){
    let newsTemplate;
    if(this.props && Object.keys(this.props).length>0 && this.props.news.latest){
        newsTemplate = this.props.news.latest.articles.map((article,i)=>{
            return (
                <div key={i}>
                 <p>{article.title}</p>
                 <p>{article.content}</p>
                 <p>{article.description}</p>
                 <p>{article.author}</p>
                 <img src={article.urlToImage} />
                </div>
            )
        })
    }
       return (
           <div>
               <button onClick={()=>this.getLatestUsNews()}>Get Latest Us News</button>
               <h1>Home News Section</h1>
               {newsTemplate}
              
           </div>
       )     
    }

    componentDidMount(){
          this.props.latestIndiaNews();  
    }

    getLatestUsNews(){
        this.props.latestUSNews();
    }
}

function mapStateToProps(state){
    return {
        news : state.news
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestIndiaNews,latestUSNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);