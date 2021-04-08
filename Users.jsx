import React, { Fragment, useState, useEffect, cloneElement } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Row, Col, CardColumns, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Users = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        aadhar: ' ',
        pan: '',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentbalance: '0',
        account: ''

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const userButton1 = () => {
        props.history.push('/subamount');
    }
    const currentWithAmount = () => {
        props.history.push('/currentsub');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    return (
        <center>


            <div className="userpage">
            <Nav.Link>
                  <Link style={{marginLeft:'1400px'}}to="/main">Logout</Link>
              </Nav.Link>
                <h3 > User Id :{id}</h3>
                <h3 > Account No :{user.account}</h3>
                <CardColumns>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSFRISGRgaGBgYGRgYGBgZHBwYHBoaGRoZHRkcIS4lHB4rIRkYJjgmLC8xNTU2HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJSM2NDQ1MTExMTQ0MTQ0MTQ0MTExNDQ0NDQ0NDQ0NDE0NDQ0NDE0NDQ0NDQ0MTQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIFBgMEB//EAEAQAAIBAwIDBQQHBQcFAQAAAAECAAMREgQhBTFBBhMiUWEycYGRI0JSk6HR8BQVU3KxBzNUYpLB8YKissLhFv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACQRAQEAAgEEAQQDAAAAAAAAAAABAhEDEiExUUETImGBBDJx/9oADAMBAAIRAxEAPwDYiOJYxNpE44o5BIQEBAQJCMRCMQGJISIkoBGIoxAYjgIQCSEjJCAQhCACEIQJCSiWOAQhHABHFJQCEIQCEIQKZY4LCBMRxRwJCMRCMQGIxFHAYkpESUAjEUFgSEcQjgKSijEBxRmKA4GElAYjiEcAhCOACSEgJMQCEDCAQhCBTpGJFRJCUSElIiSMgYjijEBxgxRiA5KITH8c1up0epSp3lR6DG4RjcWtZ05cwCSD7vKbwwuV1HnyZ9E3WxgsyfaftCVVKemc51Ar5rzxJ8Ci31ieksamrfR6XOrU7yrbIh35sbeEeYW45c9ztfbf0cu2/NY+vj318L0Rym7N8TOooq7uhqEuWUECyhyB4egAx3li+vpBczWpBb2yLra/Pne087hlLrT0xzxs3t6IxOL10C94XQJa+RYBbeeXK3xkdNrqVQ2p1abnyR0Y/wDaTHTfS9eO9beiOKVPaTjI0lPKwZ2OKKeXvNt7CTHG5ZTGGWUxxuVW4kphNNo+KapRW/aAgbdVd2S4PIhVQhVPS9tt534HxrU0tSNJqgzXOAYi5Vj7JzGzIdvn8J7Xh1LZfDynPuzc7VtFkpzqVVQZOyqPNjYTnptfSq/3dWm/8jq//iTPGY2zb2uUl09H6/C8Jne0iak1KXcahKa2OatUCFvEPZBG+15fVtQiHxui35ZMF/qZbhqbjMz3bK6iSE8tTXUkcI1WmrnkjOqt/pJuf6T1D8pNWNTKXwIQhIohC0IFOsYiAkgIDEkYgJK0AEcQjgOMRCMQJyj7XvTGmcVOZIFMDn3l7hh6Abn026y6vMVxHRajXalQ9OolFTYFhYBAfER/mY2Hyntw66t2608ea3p1Ju1WdjXpjUrnzIPd35B/X1529Zqe2uiSppzVa+VP2d9vEVDAj4Ty9rOz/eIlSgniQKmKbEoPZI9QZ6K3f6rQuj02WsBYqRbPE3DD+YbehE6MspllM5XNjhccbhY83ZDhiLpzqhlm6VUNztjn0H/Qspex/A01avmzhFxACm3jI3J+Fpddkq9cIdK+ndURKrByCCzlgQtiPJn39BOvYTRVKSVBUpshLLbIWv4bXkyz11dzHDfTNOfaDhumUUFrakolNFVaVrlguxYW5E2sW5bGZrXVtOK1KppBVUAi5e4u2Q9ne/Ug/CX3aTQ1k1aataJrJZfDbIDEWwItt9r3mebjy6rVtSrfslRUQ2RObc1Ysw+qDYWHoZrjs1LvzE5JeqyTWrPh9Av+vfMF/aIfpKOXs4Py8rrlN4rXAPmBsel7Sn7TcF/bKYUEB1JZCeV+qnyBnNxWY8nd1c2Ny4+z2cV1b0qLVKVPvHGOKKCcgSBsF35fhaZmj2t1AqpTfSqhdkU5Zq2JNr2IB6zjpeK8Q0qii2maoFFlJVicfqjJeYta3I25yOm4XrNZqE1FdQiqynxbeFTkFRbkncdZ7TGTe9X9ue55WzW5+Ndln2t0mneoj6nVFVXlSAuWG+RFt1J8z8JldTW041FGpoxUVc1BLdTmPZPlY7i/lLztHoqya1dUKBr09vDbMbAjErv55Da155+Opq9U9LUHSVFRCMEvk9gwZmI2tewHwmsOma7/AAxnMsre3y7/ANoAvqNN/L/7rH/aUbNRPkH/AAIno7aaGrVradkpuwVfEVHLxqd/hePt/wAPq1jS7um72V7lRyJIkmWP2/trLHLWX6ebtL2ZpUNMaqlzUDKXdmJzZiMyfW/9Jo+yFZqmjos5JOLrc87I7Iv/AGqBI9rtO9TSuiIzMSllXc87yfZLTvT0lJHQqw7y6nmL1XYfgRPLO74/zt68eGuSa8aXMIQnO6hCEIGaqu9rrl/tOK6p/wCJYfAn8p2NYBQG2nCnQubnfnacvVfb6Ewnp3TUMeVyfMn8toqrPyysfS06J0nR1UYuTtzuenSOqtTCT4c9OWvizuT6mWdOkLdZRjVgOifWqZMP5VNvxJltQ1YyCEjK1z6e+WZGXFLPDraMSTiRE6JdxwZ4dN0Y/X68pWa3j1Ck5pk1HdfbSkj1CoP2sQQp9CbkdJZjn+vhKLsT/cOx9s6iv3h6lxUe1+uwxt6WltYsmltw/X09QneUnDLci9iCGHNWU+JSPI7z1fr/AGma43qUpJUOndVqftWmFcpscnZAcuhJQ/jPdxHVMur01MOQr0tWzL5lFp4Mfdk34xsXMLdJg2q6hOHtrf2ysarqii+GCZaqkgIFrlgl1Jv9Zp7uKGrp6tHRirrKoqCpVqMgRqjBcUwW5UKhY5Ei5/qGzTXiH6/XzmL1Gu1NLT6xgurSmlNX076hUV1Y+0lwxyUbG56Ez3NTqabU6UDU1nFculRXZbEinktRbDYgg8tuUbGh02pSoCyMGAZkJHLNTiw+BFp5+LcVo6RBUrVMFLBAbE3J9FBPLe9tpVdiKBSjUOTtfUagWZrjw1X39C3M+c8PGtWtXWtSehq6tKjSZW7ig9a1asObY7KVQgj+b0jftdemxB/Xp0tH+v8AmYXQccq/u9UDOlenVTRuzqVdAXVFdlf2WKFfa+sDLbiaPoEq101TOF09RhRrEOz1VF1qKbghRfxDcWHTnG000yn9bx7+v6/4md02hqUlpVzrKjHHKqtQqy1cqeWCAEBHv7NvLkZVUnrtoDxM6qp3xpnUY3UUgoJIo4csbAC/PnGzUbaMGUXCdc9TV6pGY4LS0jop+qXRy9veQPlKWjrtRVTSINRUQ1dbqqbOoUsaaGpiBcdAoAPQ2O8bXTavUCKWYgKoLEnYAAXJPpChWWoi1FN1dQynzBFwfd5e+ZDV03T9t0pr1XpjSrXQswyUsaiMge26HC+/nND2dp4aWgMna9JGuxuRkinH3DoOgjYsxCIRiEEIQgZHIVEtfcXk+HapT4W2I5fnK11YXCm09empZAE8+s431tLN6ZsXUg7E29QLj8ZU6ivnQoZNZWTOox5Y2vv8ZdU6oAxPK1j/APPWZPtLw7UMEp6e/cogU4FS5I+0pG+wG8LLFe/G7vUr73Ze7op9lBsNvMm7H326T06Pioprnvm7Kig+4ksfQKrfEiZ9kZW8WQYdHW3+w39Z5KmsJrJtYJu3UAEEXk03Mn2PR6kVFFjO5Ew/BOMYAKzActz/ALTaaOsKihlIPrPXDLTn5+Hc3HWVGp4EjO9WnXq0Wqe33bgK5tbIo1wGI2yG+0uLfrn/AF2tK5BpXfu1XTF7kY4Jckc77cxPdwST5c14DphQbTeLBzm7lyXape/eFybl/WR03A0SquoevVqVFR6ebuvsMoW2IFhb3XN957/3dR/gUvu0/KM8Oo/wKX3aflHdft9vG/BqTab9jLN3fg+sMvBUWoN/eo+E78V4empxc1GR6bF0qIwVkYgg/wAyEcwbg9Z2HDqP+Hpfdp+UP3bR/gUvu0/KTuax9q89n6LJWR6lR3rgLVqOy5sBsFFrBFHkBae7UaNKj0ajNvRYsliNyVwN/PaT/dlH+BR+7T8o/wB20f8AD0fu0/KU1j7cOG8OTTtUKVHK1HL4MwKq7MWbEdLk3I9JLh+ip0M8GuXdqrszAlmY3+Q5AdBOn7uo/wACj92n5R/u2j/Ao/dp+UdzWPt4a/AaFR6zsT9OqCooewyp2FOott1cWBBEKHA6WRerVqV2NN6QNVlONJ/C6gKALkbFuZ6z3fu2j/Ao/dp+Uf7so/4ej92n5Qax9q/ScApo9NmrVai0TeilR1ZUNrA8rsQORa9pzHZeiFNIVqw0+WX7NmO7uWLFQbZYEk+G+O8tRwyj/Ao/dp+UP3bR/wAPR+7T8o7p9vt49ZwRKlU11rVaTsi037twA6L7IIN7EC4DDcAnfzWi4Bp6S0URmC0Kj1UBcHxOGDXvzFnIntfQadAWajQUAXJNNAAP9ME4dQYAihQIIuPo03B6jwwv2+0KvDqbvUqMSTVorQcZAeAF22638Z3nLR8IWmtFBqK7CiTiDU9pSLCm4Gzqu1r9Z6H4fp1F2oUANhcotrk2HTzInReG0VNxQogjkQiA7eoHnCXp9vT+v1+MYihKwlCRvCBlKtEXuDIOhA52EvSgPMCRGmS98Bf4zw+jXbj/ACpPMUiM1r/q85NrGQg23v6jb85of2dPsr8pT8bWnSwZiVViRc8gR5nymMsLjG+PmmeWnso001CeNAynazAG/wAZkeN9hWQO+mu4JuabHxgAWshOzjyB39803DtSEA3FjuCDsR6HkRLXT6oNv06eZ90Y9+z0ylnh8g4Jw56lSz5eA+y19iDyI8/fPrvD0xQC1jYbThxTh1I31OwdbZtyJW9jlbna956dLqkqLkjqw5XBvb0PlLMbMtJnyzodhzmdo6PUJ3qrTqEt+0FCayLTydX7slVOa72FxuCb3FrzRWjE6dPm7+WYocK1BWoGDAYVDTUuoKu1MKlwjFQc78mI3vcywPDnVNTTQsFfDuRmbj6JFfxE7HMMee/PnLeMQjN1+D1lyNIsLtVFjVIvTKoVQG5xuyvv0L3uBHW4TXdXK5U/o37pDV3QsR4Sy5C5XMX8QXIWvaaSECl0+irDTOnjDM5ZUd0ywuhKZJ4UJs+wZgMh4vLypwmucnsyWS9FO9yNNu9LhWINiQttwSLHG5mkEcCm4rSepqBTpOVDLm58XgNPI0T5WZ2QleZWkwtvPLp9HqUCstJhYYtSNZWJfAo1XMkjEtibXvbe1/CdJeAgU3C+HVqaVSzEVXCKrFswqrpqKHa9h9ItU363v1ldS4VqggUZKQ5Zs6q7oKZSpTXu+XeNjZifDiXNjZTqoxAzWq4dqWzxpsD3gZnFZfpKeeQpqhOIIWwOVh4bAkMTFp+F6kNTJzNkKsWrIcRlVxUMoVg4V0F8XTwj7OTaaSgUWl4dUOlrUaibuXCKzLcqVUDIoxQHLM2UgWxNgxIHHUaDUse7CkIGPjFUDJG1WnewF8ltRSqu/u3uL6OAgZpuFVgwBTNBVVk+lxFJF1AqZFSfGMAAF3PhtPdwTT16RcPTOLMli1RGbbPJjj4WXdbNZXNzkPCDLi0BAkIRRwCEIQPAJy1WpWmhqNew6AXJPQAGdROGt0/eIU68x7wb/CTKem8ddXfwzA7T1qlRqaU0QYMQxuxFrDbpffyMp9TpqrFndmc9WYlj8zNHqOAuq3QeLzVhcf0PKeZOG6pvDdm6EMoA+dr/AIzwymV8voY5cePhmDr61Cwp2A+wRdL+7n8iJf0uMuts6PsgXZN9ufI89z+MsV7JhgM6mJBBsq5AW6XJEs6PBUBu7ZAEFVxsLjkW3390kwyS/wAjDTO8b7Sd5TaioAJIV8rXtfYW6X6So7H6l6eoS18ahClPRlBv8DNNxvskKzmtSqKjE3Km4X4EA/K079n+zK6VzWd86hFhjcKo5bX3Jt126+cswy6nLnyTKNCBCMRTpc4jhASBwijgEcUcAjEUIDjEQhAnCRkoBAQhAAY4QvAcIQgEIQgeICAEBHKC0kIhHaQOMCeHXV8Fe1r3Fi5IUehtvCigwHf01IO5y9i/QBWveLVk27anXUqe9StRTe3jdF3+JhpdT3rMKdN3VTizjAJl1CuzANb/AC3Eo+KV9O1KrTonBsWsMFNMmxHLkT6TV6Kg1NFprTCqgxULdQAOXKw+XnG9+Cx3o8PDLfPxeXQehnjqoVJU7ET2MzjxXQb7jKxt5E5TzauspIBIyP1b3NhJByhCEqCOEIBHFHAIQhAYMAYAQtAcIQgShCEBXjEI4BHFCUO0IoQPIIQEIDEkTtIiFT2W9x/pArOK1iUdUXfG4yG1xvfcf0nOjxPNEeoCGIAKrm4G3LIKOvW39Z4qtRn1LgrUxF7MXVV5AbDnNJoNMtOmAotcXN+pPM3/AF+ExlOpvG6Yji2IqLVpDIlXV1BwJDDEAM1rc/jbe803ZvX1u6RNRQBYBV7xGSzWVd2XYKTvsNtukqe2PB6FRKlSwV0VGzAH1nCAMvLcny3APKYTgGr1FJDXSkEQAjvC4or54YOcX8rKL7cwJnGXEt3X2bi2pqqFWlpFdWIDu7hVVb7kC12b02HrGyWAG9wNzjbny3G4nzvT9oRxBSi6sUnCgul3UWtuUOdjY+71Alz2Y1FRKtKkuoqVaf0qsXVQQFTK+QJJXLa5PWbmSXHv2amOIRzTIhCEgI4oCAzEIzEIEhCEIDEIoQHCKMQJQkYCUTivCIQHeOEIHjEcUYMBiFb2G/lP9ICKqPC38pgU4sK9rcwb7c9h1jXV1aWKoM1ydcNhZVa4YMdgOY322nmq6lBqSDUUE5YqpDGwtz+yfjPNragJ8RUBdhc8r3GR6l/EbAcsiee488Zrbdu4rNb2gWshUKGs+TpTqZFnHs51rbAbeFATKvimnpaoolchGyCKxGBF2Hgp0WOZY7XZ7dJV0NJpqiA4alVXZVRHa4ubuzgABm52uLbDzlzw3iFJGpvTRQlF0Z3RQVFMXADVTiMVzLBVBZm3PmZar2ajslRTU0qargopO4CsxqMFdAXqPyJZnsANhi3OaHgWkenqQO9BQqxVMEVr28RJUAEjYee868U0TVa1LU0GRxTWolQZWV6bYnwt1YFR/wDJUcFu/EyTl9HTckNtbIEf+088bbk3ZJivtXxxKbvTNNyUAYkWsQeRAnXh/GErBiqVBa53H9Jj+IV76vVbElMVHondo3uHM8t95a9n9Uqo/libWyuPeWJJHxmcuTKXSzDGxqNPWFRA63sRtfnztOt5kn4swoaWnTZleq7nIMq+BGKut7W3Z0Ow+qZ002qrvXKirUIy9k1LC3XYbETd5pj2Y+na1MJS1OLCi1dn7womDWyUkFjjiFIsN+UVLtGjsFFOoSbfY6/GbnJjZ6ZuN/1dxzgmpDOadrEKGJuCLHpz9J3t+t5uWXvGbNCMRWheVDheAigOEUkIBARQlE5GO8cCMJKEDzdy3mIxRbzE7Zt9gxZt9gwaQFFvMSFak2LWIvYzv3h+w3yMDV80b5GF0+ba2utLW1G8L5syhOSLcC6lgDZrjYsV9x5zstd2qJTVSiO6qxshZFLAEsSAyn585oamgIe1jZjcsENz/MQCL7nn5mR4joKgFw9wOQsTb4Dp7pjVNzT0rSCAIi4qNgu9gBsBt19TKPtZwQ6ml3a+Bg6EHe25sxZRswA38x0llT19VFs4DnbdUe594tFqNW7nwh1sb+w5v8Cu/wAJqxOqO3B6HcadNOlm7pe6YoCAzrux23Aa4e/+aU/CyV4o42/u1yAAO9rHce8bS+q6h3QqUqEkAXVHVuvW3rPP2d0hp+ALURFuLMhDMTvYMRc++885hrLbdz3NM5xCkBrNYrNVF8G8GJ3NOmeRHLz3lvwChdHH0m6m1gg/1cp59aHGq1bKtSzFMfo2syimg2NtzceXSe7hD+CpenWBwbmjC/oAeZ28rTkz3110Y/1ZynUKjQLYAquqXxG2y1VW+23S3yltwHUHvRdae55h/wAAMecrNH3iHSDCooWlqCwem4szV2IDeA4sQLj4ecuuBNU73MoQAeeLKPxXf4S5S7THw8HHtYuOvNvaNGkguWLPk1m5bLsTboBPDptWC62XcYAgq4Nxsd7kfjJ8Zo1T3wAqKG1tM5MrNZAlTxDbxKWK8r2v0nShpKy1N3J3HKizc7C/S8uU7RnHzVxr+JYNqHXJSujdhuwZmFgHTIEErlf3lZS6fiNYhA1TUNsLkhwST/Kxns7UUal64bJgeH11QrSKguXonG4J8VlbaeTRUHullqWxTkT5dZbuYzRNbrUPrkpOmZqKBSd2LFjcKN/AL5fG59J1/wD0OmuB3j72tam/X/pv85Q9p1cO5Aex0WoAtdvF4bDbmTvtzlZpnuyeImyp9RlI9LTczykTplfQKGqV2wUnLHOxUjbzudp6e7PpMvxDXmjUeoM9tHVxZRc5/Rqu3VgWB+BlTT4vrSVAqVCbC4K2Nz52Hwm5y6ndjo9N/wB2fSHdn0lOmurI6ZCoyik71AAACVU4qrHbK/Ibc/SFLtbpnVWUkhhkN1+R6Cbx5JZtLjYuO7MeDTgnFad0BYAMCQxZLDEZG9j79+W0Sca0zWK6qgbi4s6m48xYzUyl8M3Gzy9GDRBGk6WqpsQFqKSeQvufd5zvjNDzYNHPRjCEc5KQBjkVKBkYzA5HnHc+ZiYRyg38zHY+Zik1gdQu04qtjO/Sc15yLpyINzvJ0zz90R5xp1ksi7QBO255Hr8ZKj7XOB6R0+cahuouDvuefn5bRb35n5mdG6++QEaibqT3uTc+zbmZGx8z851MhGondJ735nl/zIgN5n5zoYRqLsmuTzPLzMWB8z85K8kI1DdRt7/KMLHAR0w7naIr52+X69IxHGobotFaOEvY2VoRwhHnAhJQgRjtJQgQtC0lCBG0kIRwAmAgI7QI2gBJYwxgK0BHjDGAjC0eMMYCvHDGO0BXjjtHaAoSVoWgRhJWhaAoR2haAopK0LQIwkrQhXGEIQghCEAhCEAhCECQkoQgOKEIU4oQgOIQhAcIQgEcIQHCEIBCEIBCEIBCEIBCEIH/2Q==" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title><br></br><br></br><br></br><br></br><br></br>
                            <Card.Text classname="cards"><Button variant="primary" size="sm" onClick={currentButton} block>Current Account</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card >
                    <Card style={{ width: '10rem' }} className="">
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title><br></br><br></br><br></br><br></br><br></br>
                            <Card.Text classname="cards"><Button variant="primary" size="sm" onClick={savingsButton} block>Savings Account</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card>
                </CardColumns>

               
                <br />
                
                <div className='demo' style={{ width: '40rem', marginLeft: "40px" }}>
                    {
                        showButton === true && (
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd" onClick={userButton}>Add Amount</button><br/><br/>
                                <button class="btn btn-outline-primary btnAdd" onClick={userButton1}>Withdraw Amount</button>
                                <br /><br />
                                <ListGroup>
                                  
                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.balance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.sType}</ListGroup.Item>
                                    {/* </div> */}
                                    <br />
                                </ListGroup>
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd" onClick={currentAddAmount}>Add Amount</button><br/>
                                <button class="btn btn-outline-primary btnAdd" onClick={currentWithAmount}>Withdraw Amount</button>
                                <br /><br />
                                <ListGroup>
                                    
                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.currentbalance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.cType}</ListGroup.Item>
                                    {/* </div> */}
                                    <br />
                                   
                                </ListGroup>
                            </div>
                        )}
                </div>
                

            </div><br />

          
        </center>

    )

}
export default Users;