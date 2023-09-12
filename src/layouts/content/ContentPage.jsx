import { useState } from "react";
import { Card, CardContent } from "@material-ui/core";

import { COLORS } from "../../themes/colors";
import { CollapseButton } from "../../components/ui/buttons/icons/IconButton";

import "./styles.css";

function ContentPage(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Card
      id={props.id}
      style={{
        height: collapsed && "75px",
        minHeight: !collapsed && "350px",
        marginBottom: "32px",
        borderRadius: "10px",
        maxWidth: "100%",
        boxShadow: "0px 0.2px 0px",
        border: "1px solid #ffff",
      }}
    >
      <CardContent>
        <div className="card-content">
          <div>
            <label
              className="card-title"
              style={{
                color: COLORS.SecondColor,
              }}
            >
              {props.title}
            </label>
          </div>
          <div className="card-buttons">
            {!collapsed && props.buttons}
            <CollapseButton
              collapsed={collapsed}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
        </div>
        {collapsed || (!props.dividerOff && <hr />)}
        <div className="content-children">{props.children}</div>
      </CardContent>
    </Card>
  );
}

export default ContentPage;
