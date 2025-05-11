local Visa_Script = GetCurrentResourceName()
function Notify(e)
    SendNUIMessage({
        type = "open",
        action = e.action,
        msg = e.message,
        color = e.color
    })
end
exports('SET', Notify)
RegisterNetEvent(Visa_Script ..':SET', Notify)

--[[
    exports["Starsation_TextNotify"]:SET({
        action = true,
        message = "กด [E] เพื่อเปิดหน้าต่าง",
        color = "#3580bd"
    })

    exports["Starsation_TextNotify"]:SET({
        action = false,
    })

    TriggerEvent("Starsation_TextNotify:SET", {
        action = true,
        message = "กด [E] เพื่อเปิดหน้าต่าง",
        color = "#3580bd"
    })

    TriggerEvent("Starsation_TextNotify:SET", {
        action = false,
    })
]]