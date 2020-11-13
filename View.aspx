<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="View.aspx.cs" Inherits="JQMobTut.View" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

  <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
      <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css"/>

    <title></title>
</head>
<body>
    
        <div data-role="page" id ="home">
        <div data-role="header" data-theme="B" id ="movieheader" style ="background-color:red;">
          <table style="width:50%">
  <tr>
    <th>
      <img src="images/popcorn.jpg" width="200" height="100">
 </th>
    <th>
    <h1>Movie Juice </h1>
    </th>
  </tr>
</table>
        </div>
          <div data-role="main" data-theme="B">
          <form id="form1" runat="server">
              <asp:TextBox ID="Searchtext" runat="server" placeholder="Please enter Movies, Series and more, " ></asp:TextBox>
              </form>
            <ul data-role="listview" id="movies"></ul>
            </div>
          <div data-role-="content" id="movieposter">

              <img src="images/image.jpg" />
            <%--  --%>
          </div>

          <div data-role="footer" style="text-align:center"; data-theme="B">
            <p>Movie Juice Inc.</p>
          </div>

        </div>

  <div data-role="page" id ="moviedetail">
           <div data-role="header" data-theme="B" id ="movieheader2" style ="background-color:red;">
          <table style="width:50%">
  <tr>
    <th>
      <img src="images/popcorn.jpg" width="200" height="100">
 </th>
    <th>
    <h1>Movie Juice </h1>
    </th>
  </tr>
</table>
        </div>
          <div data-role="main" style="margin: auto";>
        
            <ul data-role="listview" id="movieTop" style="background-color:lightcoral;"></ul>
            <ul data-role="listview" id="movieDetails"  style="background-color:hotpink;list-style-type:none; padding-left: 560px;"></ul>

            </div>
<button  id="BackButton" class="ui-btn ui-corner-all">Back To List</button>
    <div data-role="footer" style="text-align:center"; data-theme="B">
            <p>Movie Juice Inc.</p>
          </div>

        </div>




  <script src="main.js" type="text/javascript"> </script>
  
  
</body>
</html>
